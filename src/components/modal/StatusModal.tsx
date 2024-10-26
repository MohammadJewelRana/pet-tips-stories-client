import React, { ReactNode } from "react";
import CustomModal from "./CustomModal";

const StatusModal = ({
  buttonText,
  modalTitle,
  className,
  icon,
}: {
  buttonText: string;
  modalTitle: string;
  className: string;
  icon?: ReactNode;
}) => {
  return (
    <CustomModal
      buttonText={buttonText}
      css={className}
      icon={icon}
      modalTitle={modalTitle}
    >
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eveniet!
        Non deserunt commodi, iste possimus magni at alias debitis mollitia!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        voluptates. Sit impedit earum libero unde debitis ipsum, voluptates
        tenetur beatae atque perspiciatis. Ad rem, magni sequi eum reiciendis
        dignissimos officiis omnis at molestias est placeat perferendis?
        Necessitatibus eligendi odio illo. Esse, modi. Laborum, mollitia saepe
        sequi quae veritatis sint voluptate porro illo est commodi! Blanditiis
        temporibus eum neque nulla quibusdam, atque cupiditate praesentium magni
        voluptate sequi, non laboriosam facilis tempora, soluta voluptas qui
        quidem? Itaque ratione commodi quidem officia molestias! Mollitia quas
        velit eos distinctio praesentium laboriosam voluptates totam unde quae,
        modi doloremque nemo natus omnis accusantium provident repellat ipsa?
      </div>
    </CustomModal>
  );
};

export default StatusModal;
