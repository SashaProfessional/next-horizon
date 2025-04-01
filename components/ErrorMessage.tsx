export function ErrorMessage({ message }: { message?: string | null }) {
  return message ? (
    <p className="text-destructive text-sm font-medium">{message}</p>
  ) : null;
}
