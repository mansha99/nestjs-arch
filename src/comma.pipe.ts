import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  UnprocessableEntityException,
} from '@nestjs/common';

@Injectable()
export class CommaPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    var output = value.replaceAll(',', '');
    if (isNaN(output)) {
      throw new UnprocessableEntityException(
        ['Non numeric value'],
        'Incorrect Parameter',
      );
    }
    return output;
  }
}
