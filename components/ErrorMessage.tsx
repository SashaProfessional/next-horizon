export function ErrorMessage({ message }: { message?: string }) {
  return message ? (
    <p className="text-destructive text-sm font-medium">{message}</p>
  ) : null;
}
