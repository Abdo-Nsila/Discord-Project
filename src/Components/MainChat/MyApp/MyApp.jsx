import { Flex, Text, Button, Code,Em, Kbd, Avatar, Badge } from '@radix-ui/themes';

export default function MyApp() {
  return (
    <>
    <Flex direction="column" gap="2" align="center" >
      <Kbd>Shift + Tab</Kbd>
      <Text m="2" size="4" >Hello from <Em>Radix</Em> Themes :)</Text>
      <Code color='indigo' variant="outline" >console.log()</Code>
      <Button>Let's go</Button>
    </Flex>

    <Flex gap="2">
      <Avatar radius="none" fallback="S" />
      <Avatar radius="large" fallback="S" />
      <Avatar radius="full" fallback="S" />
    </Flex>

    <Flex gap="2">
      <Badge color="orange">In progress</Badge>
      <Badge color="blue">In review</Badge>
      <Badge color="green">Complete</Badge>
  </Flex>


    </>

  );
}
