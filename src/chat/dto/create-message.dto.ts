export class CreateMessageDto {
  readonly message: string;
  readonly sender_id: string;
  readonly resipient_id: string;
  readonly date: Date;
}
