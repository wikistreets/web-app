import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Expand: React.FC = () => {
  return (
    <div className="gap-2 text-sm text-secondary font-light">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm font-light text-secondary">
            more
          </AccordionTrigger>
          <AccordionContent>Some content</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Expand;
