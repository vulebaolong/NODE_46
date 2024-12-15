export class BadRequestException extends Error {
   constructor(message = `BadRequestException`) {
      super(message)
      this.code = 400
   }
}

export class ForbiddenException extends Error {
   constructor(message = `ForbiddenException`) {
      super(message)
      this.code = 403
   }
}