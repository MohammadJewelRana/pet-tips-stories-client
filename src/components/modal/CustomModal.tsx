"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { ReactNode } from "react";

const CustomModal = ({
  children,
  buttonText,
  modalTitle,
  css,
  icon,
}: {
  children: ReactNode;
  buttonText: string;
  modalTitle: string;
  css: string;
  icon?: ReactNode;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

 

  return (
    <div>
      <div className="flex items-center">
        {icon}
        <Button
          key={'blur'}
          onPress={() => onOpen()}
          // className="capitalize"
          className={`${css} -ml-2 -z-[10px]  capitalize`}
        >
          {buttonText}
        </Button>
      </div>

      <Modal backdrop="blur" isOpen={isOpen} size='3xl' onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              <ModalBody>{children}</ModalBody>

              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CustomModal;
