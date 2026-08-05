import { UserRound } from "lucide-react";
import { Button, Modal } from "@heroui/react";
import { Link } from "@heroui/react";
import { SocialIcons } from "./Social";

export default function Contact() {
  return (
    <Modal>
      <Button size="lg">Contaco</Button>
      <Modal.Backdrop variant="blur">
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <UserRound size={20} />
              </Modal.Icon>
              <Modal.Heading>Contacto</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
                Ademas tambien puedes mandarnos un correo, al siguiente correo:
              </p>

              <Link className="mt-4" href="mailto:correochimba@gmail.com">
                correochimba@gmail.com
              </Link>
              <br />
              <br />
              <br />
              <div className="flex justify-center">
                <SocialIcons size={34} />
              </div>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
