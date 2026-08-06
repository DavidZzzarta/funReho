import { BicepsFlexed } from "lucide-react";
import { Button, Dropdown, Label, Description } from "@heroui/react";

export default function ProjectsDropdown() {
  return (
    <Dropdown>
      <Button
        size="lg"
        variant="ghost" // Elimina el fondo sólido por defecto
        className="p-0 min-w-0 h-auto rounded-none bg-transparent hover:bg-transparent" // Resetea geometría y estados
      >
        Nuestros projectos
      </Button>
      <Dropdown.Popover>
        <Dropdown.Menu
          onAction={(key) => {
            window.location.href = "/plan";
            console.log(key);
          }}
        >
          <Dropdown.Item id="open-file" textValue="Open file">
            <div className="flex h-8 items-start justify-center pt-px">
              <BicepsFlexed size={24} className="shrink-0 text-muted" />
            </div>
            <div className="flex flex-col">
              <Label>Cuidando tu salud mental</Label>
              <Description>Por Yenni Zarta</Description>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
  );
}
