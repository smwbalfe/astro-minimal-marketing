import { HyperText } from "./ui/hyper-text"
import { TextAnimate } from "./ui/text-animate"
import { TypingAnimation } from "./ui/typing-animation"

interface BasicHyperTextProps {
  text: string
}


export function TypingAnimationComponent({ text }: BasicHyperTextProps) {
    return (
        <TypingAnimation className="text-primary">{text}</TypingAnimation>
    )
  }
  