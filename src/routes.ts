import { Request, Response } from 'express'
import { CreateCourseService } from './CreateCourseService'

const createCourseService = new CreateCourseService()

export function createCourse(request: Request, response: Response) {
    const course = createCourseService.execute("NodeJS", 10, "Dani")

    return response.json(course)
}