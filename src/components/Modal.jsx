const Modal = ({ show, onClose, size, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      className={`${size} fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex items-center justify-center`}
    >
      <div className="relative px-4 py-6 bg-white w-full max-w-[540px] mx-auto rounded-md">
        <button
          onClick={onClose}
          className="top-2 right-2 absolute px-2 py-1 items-center justify-center text-sm font-bold rounded-[100%]"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

const ModalHeader = ({ children }) => <div>{children}</div>;

const ModalBody = ({ children }) => <div>{children}</div>;
const ModalFooter = ({ children }) => (
  <div className="mx-auto flex justify-center">{children}</div>
);
export { Modal, ModalHeader, ModalBody, ModalFooter };
