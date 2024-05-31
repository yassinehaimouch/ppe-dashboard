import { ReactElement, useRef } from "react";

interface Props {
  children: ReactElement;
  onClose: () => void;
}

const Modal = ({ children, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed z-[1000] inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default Modal;
