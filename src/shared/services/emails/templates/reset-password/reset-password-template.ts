import fs from 'fs';
import ejs from 'ejs';
import { IResetPasswordParams } from '@user/interfaces/user.interface';

class ResetPasswordTemplate {
  public passwordResetConfirmationTemplate(templateParams: IResetPasswordParams): string {
    const { username, email, ipaddress, date } = templateParams;
    return ejs.render(fs.readFileSync(__dirname + '/reset-password-template.ejs', 'utf8'), {
      username,
      email,
      ipaddress,
      date,
      image_url:
        'https://thenounproject.com/api/private/icons/5342620/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABj7-e7rpXIfzHHtTyisXkCDQzBSTyttGB8N9s2PxIRGsYvuNaZ3UsogwSmYnDIXv3osZWzP1ZvXLUG2z6uX0ohKSRZWw%3D%3D'
    });
  }
}

export const resetPasswordTemplate: ResetPasswordTemplate = new ResetPasswordTemplate();
