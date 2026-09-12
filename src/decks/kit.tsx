import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  Box,
  CodePane,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  Notes,
  Progress,
  Slide,
  Text,
} from 'spectacle'
import { AUTHOR } from '../content/site'
import { spectacleTheme } from '../theme/spectacleTheme'

type TemplateProps = {
  slideNumber: number
  numberOfSlides: number
}

const RULE_LIGHT = '1px solid #D8D4CC'
const RULE_DARK = '1px solid rgba(197, 212, 204, 0.28)'

const DESIGN_WIDTH = 1366
const DESIGN_HEIGHT = 768

function sizeFromBox(width: number, height: number) {
  const vw = Math.max(width, 1)
  const vh = Math.max(height, 1)
  const ratio = vw / vh
  const designRatio = DESIGN_WIDTH / DESIGN_HEIGHT
  if (ratio >= designRatio) {
    return { width: DESIGN_HEIGHT * ratio, height: DESIGN_HEIGHT }
  }
  return { width: DESIGN_WIDTH, height: DESIGN_WIDTH / ratio }
}

function useSlideSize(ref: { current: HTMLDivElement | null }) {
  const [size, setSize] = useState({
    width: DESIGN_WIDTH,
    height: DESIGN_HEIGHT,
  })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const apply = () => {
      const next = sizeFromBox(el.clientWidth, el.clientHeight)
      setSize((prev) =>
        Math.abs(prev.width - next.width) < 0.5 &&
        Math.abs(prev.height - next.height) < 0.5
          ? prev
          : next,
      )
    }
    apply()
    const observer = new ResizeObserver(apply)
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return size
}

function Template({ slideNumber, numberOfSlides }: TemplateProps) {
  return (
    <>
      <FlexBox
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        bottom={0}
        width={1}
        padding="10px 28px 14px"
      >
        <FlexBox alignItems="center">
          <a className="deck-exit" href="/">
            Hub
          </a>
          <FullScreen color="#6F6A62" size={18} />
          <Text
            fontSize="13px"
            fontFamily="monospace"
            color="quinary"
            margin="0 0 0 16px"
          >
            {AUTHOR.handle}
          </Text>
        </FlexBox>
        <FlexBox alignItems="center">
          <Text
            fontSize="13px"
            fontFamily="monospace"
            color="quinary"
            margin="0 16px 0 0"
          >
            {slideNumber} / {numberOfSlides}
          </Text>
          <Progress color="#3D6B5A" size={8} />
        </FlexBox>
      </FlexBox>
    </>
  )
}

export function DeckShell({ children }: { children: ReactNode }) {
  const shellRef = useRef<HTMLDivElement>(null)
  const size = useSlideSize(shellRef)
  const theme = useMemo(
    () => ({
      ...spectacleTheme,
      size: {
        ...spectacleTheme.size,
        ...size,
      },
    }),
    [size],
  )

  return (
    <div className="deck-shell" ref={shellRef}>
      <Deck
        theme={theme}
        template={Template}
        transition={{
          from: { opacity: 0 },
          enter: { opacity: 1 },
          leave: { opacity: 0 },
        }}
      >
        {children}
      </Deck>
    </div>
  )
}

function SlideFrame({
  children,
  style,
}: {
  children: ReactNode
  style?: CSSProperties
}) {
  return (
    <FlexBox
      className="slide-frame"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="stretch"
      height="100%"
      width={1}
      padding="8px 12px 52px"
      style={style}
    >
      {children}
    </FlexBox>
  )
}

function SlideTitle({
  children,
  color = 'secondary',
}: {
  children: ReactNode
  color?: string
}) {
  return (
    <Heading
      color={color}
      fontSize="h3"
      fontWeight="header"
      textAlign="left"
      margin="0 0 20px"
      lineHeight="1.2"
    >
      {children}
    </Heading>
  )
}

export function TitleSlide({
  kicker,
  title,
  subtitle,
  notes,
}: {
  kicker: string
  title: string
  subtitle: string
  notes?: string
}) {
  return (
    <Slide backgroundColor="secondary" padding={1}>
      <SlideFrame>
        <Text color="muted" fontSize="18px" fontFamily="monospace" margin="0">
          {kicker}
        </Text>
        <FlexBox flexGrow={1} />
        <Heading
          color="tertiary"
          fontSize="h1"
          fontWeight="header"
          textAlign="left"
          margin="0 0 18px"
          lineHeight="1.08"
        >
          {title}
        </Heading>
        <Text color="muted" fontSize="22px" margin="0 0 36px" maxWidth="42rem">
          {subtitle}
        </Text>
        <Text color="muted" fontSize="16px" margin="0">
          {AUTHOR.name}
        </Text>
        <Text color="muted" fontSize="15px" margin="6px 0 0">
          {AUTHOR.github}
        </Text>
      </SlideFrame>
      {notes ? <Notes>{notes}</Notes> : null}
    </Slide>
  )
}

export function StatementSlide({
  kicker,
  title,
  body,
  notes,
}: {
  kicker?: string
  title: string
  body?: string
  notes?: string
}) {
  return (
    <Slide backgroundColor="tertiary" padding={1}>
      <SlideFrame>
        {kicker ? (
          <Text color="quaternary" fontSize="16px" margin="0 0 12px">
            {kicker}
          </Text>
        ) : null}
        <Heading
          color="secondary"
          fontSize="h2"
          fontWeight="header"
          textAlign="left"
          margin="0"
          lineHeight="1.15"
        >
          {title}
        </Heading>
        {body ? (
          <FlexBox
            flexGrow={1}
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            width={1}
            padding="24px 0 0"
          >
            <Box
              width={1}
              margin="0 0 20px"
              style={{ borderTop: RULE_LIGHT }}
            />
            <Text color="primary" fontSize="22px" margin="0" maxWidth="46rem">
              {body}
            </Text>
          </FlexBox>
        ) : (
          <FlexBox flexGrow={1} />
        )}
      </SlideFrame>
      {notes ? <Notes>{notes}</Notes> : null}
    </Slide>
  )
}

export function BulletsSlide({
  title,
  items,
  notes,
}: {
  title: string
  items: string[]
  notes?: string
}) {
  return (
    <Slide backgroundColor="tertiary" padding={1}>
      <SlideFrame>
        <SlideTitle>{title}</SlideTitle>
        <FlexBox
          flexGrow={1}
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="stretch"
          width={1}
        >
          {items.map((item) => (
            <FlexBox
              key={item}
              flexGrow={1}
              alignItems="center"
              justifyContent="flex-start"
              width={1}
              style={{ borderTop: RULE_LIGHT }}
            >
              <Text fontSize="22px" margin="0" lineHeight="1.35">
                {item}
              </Text>
            </FlexBox>
          ))}
        </FlexBox>
      </SlideFrame>
      {notes ? <Notes>{notes}</Notes> : null}
    </Slide>
  )
}

export function TwoColSlide({
  title,
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
  notes,
}: {
  title: string
  leftTitle: string
  leftItems: string[]
  rightTitle: string
  rightItems: string[]
  notes?: string
}) {
  return (
    <Slide backgroundColor="tertiary" padding={1}>
      <SlideFrame>
        <SlideTitle>{title}</SlideTitle>
        <FlexBox
          flexGrow={1}
          alignItems="stretch"
          justifyContent="space-between"
          width={1}
        >
          <Column title={leftTitle} items={leftItems} />
          <Box width="32px" style={{ borderLeft: RULE_LIGHT }} />
          <Column title={rightTitle} items={rightItems} />
        </FlexBox>
      </SlideFrame>
      {notes ? <Notes>{notes}</Notes> : null}
    </Slide>
  )
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <FlexBox
      flexGrow={1}
      flexBasis={0}
      flexDirection="column"
      alignItems="stretch"
      justifyContent="flex-start"
      width="47%"
    >
      <Text
        fontFamily="monospace"
        fontSize="15px"
        color="quaternary"
        margin="0 0 8px"
      >
        {title}
      </Text>
      <FlexBox
        flexGrow={1}
        flexDirection="column"
        alignItems="stretch"
        width={1}
      >
        {items.map((item) => (
          <FlexBox
            key={item}
            flexGrow={1}
            alignItems="center"
            justifyContent="flex-start"
            width={1}
            style={{ borderTop: RULE_LIGHT }}
          >
            <Text fontSize="20px" margin="0" lineHeight="1.35">
              {item}
            </Text>
          </FlexBox>
        ))}
      </FlexBox>
    </FlexBox>
  )
}

export function CodeSlide({
  title,
  language,
  code,
  highlightRanges,
  notes,
}: {
  title: string
  language: string
  code: string
  highlightRanges?: Array<number | number[]>
  notes?: string
}) {
  return (
    <Slide backgroundColor="tertiary" padding={1}>
      <SlideFrame>
        <SlideTitle>{title}</SlideTitle>
        <FlexBox
          className="deck-code"
          width={1}
          flexGrow={1}
          minHeight={0}
          alignItems="stretch"
          justifyContent="flex-start"
        >
          <CodePane
            language={language}
            highlightRanges={highlightRanges}
            showLineNumbers
          >
            {code}
          </CodePane>
        </FlexBox>
      </SlideFrame>
      {notes ? <Notes>{notes}</Notes> : null}
    </Slide>
  )
}

export function RecapSlide({
  title,
  items,
  notes,
}: {
  title: string
  items: string[]
  notes?: string
}) {
  return (
    <Slide backgroundColor="secondary" padding={1}>
      <SlideFrame>
        <SlideTitle color="tertiary">{title}</SlideTitle>
        <FlexBox
          flexGrow={1}
          flexDirection="column"
          alignItems="stretch"
          width={1}
        >
          {items.map((item, index) => (
            <FlexBox
              key={item}
              flexGrow={1}
              alignItems="center"
              justifyContent="flex-start"
              width={1}
              style={{ borderTop: RULE_DARK }}
            >
              <Text
                color="muted"
                fontFamily="monospace"
                fontSize="16px"
                margin="0 18px 0 0"
                style={{ minWidth: '1.6rem' }}
              >
                {index + 1}
              </Text>
              <Text color="muted" fontSize="22px" margin="0" lineHeight="1.35">
                {item}
              </Text>
            </FlexBox>
          ))}
        </FlexBox>
      </SlideFrame>
      {notes ? <Notes>{notes}</Notes> : null}
    </Slide>
  )
}

export function CloseSlide({ notes }: { notes?: string }) {
  return (
    <Slide backgroundColor="secondary" padding={1}>
      <SlideFrame>
        <Heading
          color="tertiary"
          fontSize="h2"
          fontWeight="header"
          textAlign="left"
          margin="0"
        >
          Questions
        </Heading>
        <FlexBox
          flexGrow={1}
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-start"
          width={1}
        >
          <Box width={1} margin="0 0 20px" style={{ borderTop: RULE_DARK }} />
          <Text color="muted" fontSize="22px" margin="0 0 10px">
            {AUTHOR.name}
          </Text>
          <Text color="muted" fontSize="18px" fontFamily="monospace" margin="0">
            {AUTHOR.github}
          </Text>
        </FlexBox>
      </SlideFrame>
      {notes ? <Notes>{notes}</Notes> : null}
    </Slide>
  )
}
