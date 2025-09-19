import { SpinningText } from "@/components/motion-primitives/spinning-text";

export function SpinningTextDemo() {
  return (
    <SpinningText
      radius={5}
      fontSize={1.2}
      className="font-medium leading-none"
    >
      {`pre-order • pre-order • pre-order • `}
    </SpinningText>
  );
}
