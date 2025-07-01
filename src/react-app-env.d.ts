/// <reference types="react-scripts" />

declare module 'emoji-flags' {
  const emojiFlags: {
    countryCode: (code: string) => { code: string; emoji: string; name: string } | undefined
  }
  export default emojiFlags
}

declare module 'country-list' {
  export function getName(code: string): string | undefined
  export function getCode(name: string): string | undefined
  export function getNames(): string[]
  export function getCodes(): string[]
  export function getData(): { code: string; name: string }[]
}
