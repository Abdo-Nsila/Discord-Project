export default function Alert({ message, onClose }) {
  return (
    <>
      <div class="alert alert-primary alert-dismissible fade show w-25 text-center" role="alert">
        {message}
        <button onClick={onClose} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </>
  );
}
