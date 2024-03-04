import Joi from 'joi'
import { prisma } from 'src/shared/helpers/db'

interface CreateBoardDto {
  title: string
  description: string
  writerId: number
  category: number
}

const MIN_LEGNTH = 5
const MIN_USER_ROLE = 1

const schema = Joi.object({
  title: Joi.string().min(MIN_LEGNTH).required(),
  description: Joi.string().min(MIN_LEGNTH).required(),
  writerId: Joi.number().required(),
  category: Joi.number().required(),
})

export async function POST(request: Request) {
  // TODO :
  // Validation Check
  const { error, value } = schema.validate(await request.json(), { abortEarly: false })
  if (error) {
    const errorDetails = error.details.map((detail) => detail.message).join(', ')
    return new Response(
      JSON.stringify({
        message: errorDetails,
      }),
      {
        status: 400,
      }
    )
  }

  const requestBody: CreateBoardDto = value

  // FIND USER
  const user = await prisma.user.findFirst({
    where: {
      id: requestBody.writerId,
    },
  })
  // CHECK USER EXIST
  if (!user) {
    return new Response(
      JSON.stringify({
        message: 'user not found',
      }),
      {
        status: 401,
      }
    )
  }
  // CHECK USER ROLE
  if (user.role < MIN_USER_ROLE) {
    return new Response(
      JSON.stringify({
        message: 'not authorized',
      }),
      {
        status: 401,
      }
    )
  }
  // CREATE BOARD
  try {
    const res = await prisma.board.create({
      data: requestBody,
    })

    return new Response(
      JSON.stringify({
        id: res.boardIdx,
      }),
      {
        status: 201,
      }
    )
  } catch (e) {
    return new Response(
      JSON.stringify({
        message: e,
      }),
      {
        status: 500,
      }
    )
  }
}
