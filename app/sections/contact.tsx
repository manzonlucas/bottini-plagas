'use client'

import { title } from "../components/primitives";
import { SkewedText } from "../components/skewedText";
import { SectionWrapper } from "../sectionWrapper";
import toast from 'react-hot-toast'

interface ContactDataElement {
  title: string
  content: string
  onClick?: (element: ContactDataElement) => void
}

export const Contact = () => {
  const handleCopyToClipboard = (element: ContactDataElement) => {
    navigator.clipboard.writeText(element.content)
    toast.success(
      `El ${element.title.toLowerCase()} fue copiado al portapapeles.`,
      { position: "bottom-center" }
    )
  }

  const data: ContactDataElement[] = [
    {
      title: 'Teléfono',
      content: 'xxx-xxxx-xxxx',
      onClick: handleCopyToClipboard,
    },
    {
      title: 'Celular',
      content: 'xxx-xxxx-xxxx',
      onClick: handleCopyToClipboard,
    },
    {
      title: 'Mail',
      content: 'xxxxx@xxxxx.com',
      onClick: handleCopyToClipboard,
    },
    {
      title: 'Dirección',
      content: 'Valentin Potente 450, Pergamino, Buenos Aires.',
    },
  ]

  return (
    <SectionWrapper classnames="bg-primary h-[calc(100vh-96px)]" id="contact">
      <h2 className={title()}>Contacto</h2>
      <div className="flex flex-col items-center w-4/5 gap-8 p-8 text-center rounded-md bg-background hero-background">
        {data.map((element, index) => {
          return (
            <div
              className={`flex flex-col w-1/3 p-2 text-xl rounded-md border-1 bg-default-50 ${element.onClick && 'hover:font-bold cursor-pointer'} `}
              key={index}
              onClick={() => element.onClick?.(element)}
            >
              <SkewedText text={element.title} classnames="font-bold text-xl" />
              <p>{element.content}</p>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  );
};