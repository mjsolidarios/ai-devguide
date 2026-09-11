import type { ReactNode } from 'react'
import {
  Appear,
  Box,
  CodePane,
  Deck,
  FlexBox,
  FullScreen,
  Heading,
  ListItem,
  Notes,
  Progress,
  Slide,
  Text,
  UnorderedList,
} from 'spectacle'
import { AUTHOR } from '../content/site'
import { spectacleTheme } from '../theme/spectacleTheme'

type TemplateProps = {
  slideNumber: number
  numberOfSlides: number
}

function Template({ slideNumber, numberOfSlides }: TemplateProps) {
  return (
    <>
      <a className="deck-exit" href="/">
        Hub
      </a>
      <FlexBox
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        bottom={0}
        width={1}
        padding="10px 28px 14px"
      >
        <FlexBox alignItems="center">
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
  return (
    <div className="deck-shell">
      <Deck
        theme={spectacleTheme}
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
    <Slide backgroundColor="secondary">
      <FlexBox
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-start"
        height="100%"
        padding="0 8px 48px"
      >
        <Text
          color="muted"
          fontSize="16px"
          fontFamily="monospace"
          letterSpacing="0.14em"
          margin="0"
        >
          {kicker.toUpperCase()}
        </Text>
        <Heading
          color="tertiary"
          fontSize="h1"
          textAlign="left"
          margin="18px 0 16px"
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
          {AUTHOR.role}, {AUTHOR.org}
        </Text>
      </FlexBox>
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
    <Slide backgroundColor="tertiary">
      <FlexBox
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        height="100%"
        padding="0 8px 24px"
      >
        {kicker ? (
          <Text
            color="quaternary"
            fontSize="15px"
            fontFamily="monospace"
            letterSpacing="0.12em"
            margin="0 0 16px"
          >
            {kicker.toUpperCase()}
          </Text>
        ) : null}
        <Heading
          color="secondary"
          fontSize="h2"
          textAlign="left"
          margin="0 0 16px"
          lineHeight="1.15"
        >
          {title}
        </Heading>
        {body ? (
          <Text color="primary" fontSize="22px" margin="0" maxWidth="46rem">
            {body}
          </Text>
        ) : null}
      </FlexBox>
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
    <Slide backgroundColor="tertiary">
      <Heading
        color="secondary"
        fontSize="h3"
        textAlign="left"
        margin="0 0 20px"
      >
        {title}
      </Heading>
      <UnorderedList margin="0">
        {items.map((item) => (
          <Appear key={item}>
            <ListItem fontSize="22px" margin="0 0 12px">
              {item}
            </ListItem>
          </Appear>
        ))}
      </UnorderedList>
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
    <Slide backgroundColor="tertiary">
      <Heading
        color="secondary"
        fontSize="h3"
        textAlign="left"
        margin="0 0 24px"
      >
        {title}
      </Heading>
      <FlexBox alignItems="flex-start" justifyContent="space-between">
        <Box width="47%">
          <Text
            fontFamily="monospace"
            fontSize="14px"
            color="quaternary"
            margin="0 0 12px"
          >
            {leftTitle.toUpperCase()}
          </Text>
          {leftItems.map((item) => (
            <Text key={item} fontSize="20px" margin="0 0 10px">
              {item}
            </Text>
          ))}
        </Box>
        <Box width="47%">
          <Text
            fontFamily="monospace"
            fontSize="14px"
            color="quaternary"
            margin="0 0 12px"
          >
            {rightTitle.toUpperCase()}
          </Text>
          {rightItems.map((item) => (
            <Text key={item} fontSize="20px" margin="0 0 10px">
              {item}
            </Text>
          ))}
        </Box>
      </FlexBox>
      {notes ? <Notes>{notes}</Notes> : null}
    </Slide>
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
    <Slide backgroundColor="tertiary">
      <Heading
        color="secondary"
        fontSize="h3"
        textAlign="left"
        margin="0 0 16px"
      >
        {title}
      </Heading>
      <CodePane
        language={language}
        highlightRanges={highlightRanges}
        showLineNumbers
      >
        {code}
      </CodePane>
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
    <Slide backgroundColor="secondary">
      <Heading
        color="tertiary"
        fontSize="h3"
        textAlign="left"
        margin="0 0 28px"
      >
        {title}
      </Heading>
      {items.map((item, index) => (
        <Text key={item} color="muted" fontSize="22px" margin="0 0 14px">
          {index + 1}. {item}
        </Text>
      ))}
      {notes ? <Notes>{notes}</Notes> : null}
    </Slide>
  )
}

export function CloseSlide({ notes }: { notes?: string }) {
  return (
    <Slide backgroundColor="secondary">
      <FlexBox
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        height="100%"
      >
        <Heading
          color="tertiary"
          fontSize="h2"
          textAlign="left"
          margin="0 0 16px"
        >
          Questions
        </Heading>
        <Text color="muted" fontSize="22px" margin="0 0 28px">
          {AUTHOR.name}
        </Text>
        <Text color="muted" fontSize="18px" fontFamily="monospace" margin="0">
          {AUTHOR.github}
        </Text>
      </FlexBox>
      {notes ? <Notes>{notes}</Notes> : null}
    </Slide>
  )
}
