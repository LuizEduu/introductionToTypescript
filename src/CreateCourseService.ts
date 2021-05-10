class CreateCourseService {
    execute(name: string, duration: number, educator: string) {
        return {
            name,
            duration,
            educator
        }
    }
}

export { CreateCourseService }