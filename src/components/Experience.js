import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import "../App.css";

export default function Experience({ color }) {
  const [selected, setSelected] = useState("");

  const ubcea = () => {
    window.open(`https://www.ubcesports.ca/`, "_blank", "noreferrer,noopener");
  };

  const leadersfluent = () => {
    window.open(
      `https://leadersfluent-ca.webnode.page/`,
      "_blank",
      "noreferrer,noopener"
    );
  };

  const pipeiq = () => {
    window.open(`https://pipeiq.ai/`, "_blank", "noreferrer,noopener");
  };

  const smarttwigs = () => {
    window.open(`https://www.smarttwigs.com/`, "_blank", "noreferrer,noopener");
  };

  const boeing = () => {
    window.open(`https://www.boeing.com/`, "_blank", "noreferrer,noopener");
  };

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={"3xl"} id="experience">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 10, md: 10 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text my={5} color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://i.pinimg.com/736x/12/c4/58/12c458169858d17de2c2d944ca694ce6.jpg"
              alt="Boeing Logo"
            />
            <Stack>
              <CardBody>
                <Heading size="md">Software Engineer Intern @ Boeing</Heading>
                <Text py="2">Jan 2024 - Present</Text>
                <Text py="2">Safety and Flight Data Analytics Team.</Text>
              </CardBody>
              <CardFooter>
                <Button onClick={boeing} variant="solid" colorScheme="blue">
                  Visit Website
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://photos.wellfound.com/startups/i/9460842-dafffd63076fdab11f12ff0d23c79bbf-medium_jpg.jpg?buster=1682922433"
              alt="PipeIQ Logo"
            />
            <Stack>
              <CardBody>
                <Heading size="md">
                  Full-Stack Software Engineer Intern @ PipeIQ
                </Heading>
                <Text py="2">May 2023 - Aug 2023</Text>
                <Text py="2">
                  Pipeiq.ai is an early-stage startup leveraging Generative AI
                  to accelerate marketing and sales pipelines. Their innovative
                  orchestration engine utilizes Large Language Models to build
                  highly personalized chatbots and email bots, revolutionizing
                  the marketing and sales industry.
                </Text>
              </CardBody>
              <CardFooter>
                <Button onClick={pipeiq} variant="solid" colorScheme="blue">
                  Visit Website
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA8PDw8PDw8PDxEPDw8PDw8PDxEPDw8PGBQZHBgUGBgcIS4lHB4rHxgYJkYmKz0xNTY1GiQ7QDszPy80NTEBDAwMBgYNFgYGEDEdFh0xNDExMTExMTExMTExNDQxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYCBAcBAwj/xABLEAACAgECAgUEDQkFCAMAAAABAgADBAUREiEGBxMxUSI1QWEUFRcyVHFydIGTsrPRI1VzgpGUobHSMzRSdZIIJTZCYqK08BYkU//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7LERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQET2IHkREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREDS1fPXExsjKcMy49L3Mq7cTKikkDflvylMo6yu0RXr0XWXR14ldMXjRlPcVIOxEsfTnzRqfzHJ+7aY9A/M+mfMsf7AgQXujN+Ytb/cz+Me6M35i1v9zP4y+RAofujN+Ytb/cz+Me6M35i1v9zP4y+RAofujN+Ytb/cz+MkNC6ZNm5CY50rU8UOHPbZWOa6V4VJ2LeJ22lsiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIEF0580an8xyfu2mPQPzPpnzLH+wJl0580an8xyfu2mPQPzPpnzLH+wIE/ERARKP0+6wKdG4KVr9kZVi8Yr4uGupN9gznv5kHYDwPMct6Jj9cupVsr5GBjNS/NRWt1DMv/S7MwP7IHc4kZoGqpn4lGXWlta3rxKlycDgb7d3pHLcEciNjKT1hdYt+j5qYteNTcrYyX8Tu4YFndduXo8gftgdJiQvRPW11LAx81QFNqeWo3IS1SVdefo4gfo2lL6e9Ztml5xw8fHpv4Kka1ndwUsbchNh/08J/WgdOiRnRvUWzcHFynUI2RQlrIpJVSw32G8w6T6wun4OTmMAewqLKrHYNYSFRSfWxUfTAlonIui/W3dmZ+Li34tFNeRZ2XaK7lg5BCbb8ju/CPpnXYCJQesjp1dotmKtWPVcMhLWJsZlKlCoG23ypUfdlz1UO+mVcB28rjtVSD3bMRtA7ZEp/Qbp3jayHVEbHyKlDPQzB903A40blxLuQDyBG48RI/rH6eX6LbjV1Y9V4vrdybGZSpVgNht8cDoEThnu3ZnwDG+ssk30O60snUtRxsJ8SitbzYGdHcsOCp35A+tYHWIiICIiAiIgIiICIiBBdOfNGp/Mcn7tpj0D8z6Z8yx/sCZdOfNGp/Mcn7tpj0D8z6Z8yx/sCBPxEQOAdc2lZFGqjPNZei9aSjMvFULK1Cmph6+Hi2PeGPgdrVo/WppWfWMbU8YY/GArCxBfiN6B6N1+kbDxlo1zpppGPl+1ubYhLpvbxoLMdCduGuzv2JB35jYDbfbcTmPWfo+gVULlabkY4vexR7Hxr1uqdDvu3CCeDbYd2w9G0DuuLZW9aNUytWyqazWQUKbeSVI5bbbd04b1x0Lbr+FWx2WzGxEc+CtkWAn9hl06kXubRtrd+Bcu5cff/APLZCdvVxmz+MpXXMf8Af2H81xfv7IEx1Oav7DOqaZlME9htbk8zyUVngv8AoHCh+kzmutl81czVrNx2+oCqsE93Ejuy/qqKx9MtnW5g26dqtmTQxSvU8axX2A2JK8FyfSOFvjeOnWi+1/R/RaGHDY1tt94Pf2zoCQfWoIX9WB17oD5m0z5nR9kSk9fGrdniYuEp2ORa11gHprrGwB+NmB/Ul26A+ZtM+Z0fZE4v1hPdrHSF8XFAdqyuFSCwVeKsMz7k8hsxs/ZAdPdBfTcXQMlAa7BiKjleXZ5Ct2wPx8Vrf6Z3rRNRXMxMbKT3uRTXbt/hLKCV+MHcfROF9LejnSZsOy3UbO3x8Yi5lN9blT73iAHPkGP0S89R+rdvplmKx3bDuIA9Ips3ZT/q7T9kCu/7QP8Abab+jyftVyz6L060bH0fDrvyq7HrwMeu3HCNY5YVKrV8O23fy58pWP8AaB/ttN/R5P2q5Ga/1e1V6FiapidqbTj4+RlozhlKWVqWZQBuOFiDt4E+EB1KY9lmsW3IpWqvGtL95VQ7KETfx5f9p8J3+cz6k9XxrsB8VK66sjGbe7hUK16Nvw2k/wDMeXCfDYeInTIH546xf+Km/T6f9iqfofafnjrF/wCKm/T6f9iqfoeAiIgIiICIiB7E8iAiIgQXTnzRqfzHJ+7aY9A/M+mfMsf7AmXTnzRqfzHJ+7aY9A/M+mfMsf7AgT8RECldKurfTdTsa9g+Pe3N7aCALD4upBBPrGxPjK9g9SuEj8V+XkXKCDwKiU7+ot5R2+LYzq0QNbBw6sapKaEWuqpQqIo2Cgf+98qvSrq/xtUzKsy3IvrequutVr4OEhHZgTuD6WMucQNHUtJxcvgGTj05ArJZBdWtnAx7yN+7uEh+mfQ+jWa6a77bahQzOpq4NyWAHPiB8JZogaGjacuHi0YqMzLj1LUrNtxEKNgTty3lX6O9XGLp+d7YDIyL7vyp/Ldnt2lgIZ/JUc9i3+oy7xA1dSw0yce/Hs34L6rKX27+F1Knb185V+hvQGjRrrLsfJyLBbX2b129nwHZgVbkoO45j9Yy5RAqXTToNj6y9DX3XVex1sVRVwbNxFSd9wf8MncDS66cOrBO9lVWMmMeMAmytUCeUBy5gSQiBROjfVrj6ZmLmY2XlBgHVq27Mo9bd6N5O5HcfjUGXuIgUbW+rfFzdROpWZGQtheh+BOz7MGtVAHMb8+Eftl5iICIiAiIgIiICIiAiIgaOs6euXi5GKzFFyKbKSygEqHUgkb+nnPNF05cPFx8VWZ1x6kqVm2DMFGwJ2m/EBERAgszA1NrHanU6qq2bdKzp62sg27i/aDi+PYSC0CzWMw5wOpUV+w86/CH+7lfjCKp4/7Qbb8Xdz7pepU+gnvta/z3N+7qgT+m0ZFdfDk5C5NnEx7RaBjjh9C8IY93jvI3XNSuxs3S1VkGNlX3Y14ZfK7Q0s9JVvRzRht6d5PysdYNZGnNkKN3wb8bPUDv/I2qz/8AZxwJvVs1cXGyMlve49FtxHiEUtt/CRPQvU8nJxWGbwjLx77KMgIOFOLZXQgfIdP4zDpgwupxMRTv7YZuNS23px1Jut+gpWw/WnmIew1vKr7kz8OnKXw7ahuys+ngan9kDZzNRt9tcPCrZQjYuVlZIKgsUVkSsA+jynJ+iTsrOjDttX1XI9FC4enofkobrP43KP1ZZoEFoOpW5GTqlVhUri5aU0gKAQhoRjufSd2MnZVuif8Afdd/zFP/ABqpaGOwJ8BvArGbrGXk5dmDpgqX2PsM3OvU2VY7sN1prQEdpZtzPMBeW/M7Tx9K1iodpTqwyXUbmjLw6Eot9QaoKyfH5XxGfPqzXi0qrJIHaZt2VmXMBzex7n5nxPCFH0SUzulGm41rUZGdjU2ptx12WqjLxKGG4PduCD9MCRxHsaqtrUFVjIjWVh+0FbkDiQOAOLY7jf07TW17VEwcTIy7ASuPWbCq8ixHco8NyQPpm1iZVd9a3U2LZXYOJHQhlZfEH0zW1zTEzsS/EtJC5FbVkrtupPcw9YOx+iBCU6brNyi27VBhu4DDGxsSiymnfuVmsDM5HpIKjw275LaMc8CyvOFDtWwFeRj7ot6H0tWdyjDluNyDvykDV0gzdOUV6vi2WVoOH2zwla6hlAPl3Vjy6zsBuQCNzylo0/Poyqhdj213Vt7163Dqdu8bjuI8PRA24iIFe6b9IH0vAszEqW4o9a8DMVB4mC77j45YEO4B8QDKL1zeY8j9LjfeLLzX71fkj+UDKIiB7E8iAiIgIiICIiAlT6Ce+1r/AD3N+7qlsmhpelVYpyTVxf8A2sqzLt4jv+VcKG28Bso5QN+a2oYiZFF2O43S+qylx4q6lT/AzZiBQOiF7Zl+ncfNtL0opdz7sx7DQd/WBjW/65NdKh2V+mZvcMfNFFp8KMpTUd/V2hpP0eqSOkaHj4T5L0Kytl5DZFxZuLy2JJC+C7knb1mfbWNNqzca3GvBNdy8L8J4WHMEEH0EEA7+qBFdBk4sI5J787Jys0nxWy1uzP1YSWOa+Dipj01UVDhrprSpB37IihVH7BNiBVuif9913/MU/wDGqlpmjg6ZVj2ZVtfFxZdout4m3HGEVBt4DZRN6BT+g1gxfZOj2eTbhXXPQp33uwbXZ67F37wCxU7b7FdpbLVBViQPenmQPCRms9H8XN7NrlcWUkmjIpsejIoJHMo6kEfF3eqRrdDUsHBk6hquXUeTY92UqV2Dwfs0VmHqJ2gZ9XHmTTvmy/zMnM7PoxgjX210iyxaazYwUPa2/CgJ9J2P7J9MbHrprSqpFrStQiIihUVQOQAHcJjm4dORU1N9a21uNmR1DKw+KBsSm6TSmPr+bTiqEpswKcnLrTkiZptYIeEclZk3J279gZsJ0NCDhx9T1bHq5AUV5auiL/hQ2IzKPpkxo+jY+CjJQjDjc2W2OzW3XWHvZ3YksfjgSURECidc3mPI/S433iy81+9X5I/lKN1zeY8j9LjfeLLzX71fkj+UDKIiAiIgIiICIiAiIgawzaTaccXVG5VDtSHU2qhOwYpvuF9cU51FlllKXVPbVt2tSWI1lW/dxKDuu/rmjp+mWUZOTYttTU5FjXlDQRetzLWp/Kh9iu1Y5Fd+Y57ACaml9HDj5RyDcrons3sK1q4LB7KvW63tLOI8ezKAuwXYd+/fAmky6mfgFtZfd14FsUvum3ENgd914l38OIeM8rzaXselba2trCmypXU2Vg9xZQdwD65Caf0YFGe+ctxPH7LNlXBspe50YODvyYLWFPiAvdtz2dP0Z6c3Jyu2HZ5A/uyI6p2m6/lW4nYcWy7boEB35gkAgJOvKqchUsrYnj2CurE8D8L8gf8AlbyT4HkYOVUEe3tECV8faPxrwJwEh+Jt9hwkHffu2Mh9I0BsbJe5rhYg9mDHrFRR6xk5Hb2Bn4iH8oADYLsBz375s6Np1uMchWtrsqtyMjIrQUsliG213ZWYuQw3fYbBe70wNyjUMe2trqr6bKk347UtR614Ru27A7DYc5m2VUqLabEFb8HDYXXgbjICbNvsdywA8dxImzQSdN9r1v4AyLXZataktWXBdQpJALLuu53A332PdPlb0ZFmm16bZcbK0tpPGawpbHryFdaiFIAPAoTiG3iAO6BNtlVitrTZWK04uKwuoReEkNu3cNiCD4bGYpm0Mldi3VMlu3ZOLFKW7gnyG32bkCeXoBkP/wDHm9rlwDkF3WwXDIesHitXJ7dS6AgEFgAQCNxvtt6NnU9HbMwji32JxtwFraa3qUMrht1XjLL3Ee+9JgStVququjKysoZWUhlZSNwQRyII9M+S51JtbHF1RuVQ7UixTaqHuYpvuB6590UKAoAAAAAA2AA7gJBYGiW0ZlmQMreh2yH9jitg5stNZJd+PZgvAdvJBAbbfYCBLVZ1D2PSl1T2V7dpUliNZX8pQd1+mK82l7XoW6prawGspWxDbWD3FlB3APrkTg9Huxz7M3ti/aDIHZsrbV9o1R8jyth/ZDflz8nu2O+GB0eanMOQb1atbMy2qsU8Ny2ZLq1ge3iPGoK8gAuw2334RAmlyqi3ALELcTLwhl4uIAErtv3gEHbwInlebS9rULdU1tY4npFim1By2LIDuBzHf4iROPoTJnNlG5WqL23JT2JFi3WV1oxNnHsV2r3A4Qd27+U+uFoFdeZk5rM72XWl613KpSpoprYcO+zE9iDxeB28dwmoiIFE65vMeR+lxvvFl5r96vyR/KUbrm8x5H6XG+8WXmv3q/JH8oGUREBERAREQEREBERAREQEREBERAREQEREBERARKtmdYGjY9tlF2aqW0u1diGq88LqdiNwux5+E+Pul6D8PT6jI/ogW+JUPdL0H4en1GR/RHul6F8PT6jI/ogW+JUPdM0H4en1GR/RHul6D8PT6jI/ogafXN5jyP0uN94svNfvV+SP5TkvWd010rO0q7HxctbbWsoZUFdyEhXBJ3ZQO6dar96vyR/KBlERARPYgeREQEREBERAREQEREBERAREQEREBERA0n0vFZiz41DMxJLNSjMxPeSSOZj2oxPguN9RX+E3YgaPtRifBcb6iv8ACe+1GJ8FxvqK/wAJuxA0vajE+C431Ff4R7U4nwXG+or/AAm7EDS9qMT4LjfUV/hN2IgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiUf//Z"
              alt="Smarttwigs Logo"
            />

            <Stack>
              <CardBody>
                <Heading size="md">
                  Front-End Software Engineer Intern @ Smarttwigs
                </Heading>
                <Text py="2">Jan 2023 - May 2023</Text>
                <Text py="2">
                  Smarttwigs is a global software consultancy solving complex
                  problems with technology. They connect strategy and execution,
                  helping our clients to strengthen their core technology, scale
                  with flexibility and create seamless digital experiences.
                  Built front-end components in Typescipt and React/React
                  Native. Worked with data visualization and API integration.
                </Text>
              </CardBody>
              <CardFooter>
                <Button onClick={smarttwigs} variant="solid" colorScheme="blue">
                  Visit Website
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/89ee6212-c17d-444e-8641-b5b3279d88d2-profile_image-300x300.png"
              alt="UBCEA Logo"
            />

            <Stack>
              <CardBody>
                <Heading size="md">Director of Development @ UBCEA</Heading>
                <Text py="2">Sept 2022 - Present</Text>
                <Text py="2">
                  Web + App Development in React, Next.js and Wordpress.
                  Currently working with 2 other developers to build a web app
                  to track computer usage at the UBC Legion Gaming Lounge.
                </Text>
              </CardBody>
              <CardFooter>
                <Button onClick={ubcea} variant="solid" colorScheme="blue">
                  Visit Website
                </Button>
              </CardFooter>
            </Stack>
          </Card>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src="https://media.licdn.com/dms/image/C4E0BAQEyI4ApGXG0CQ/company-logo_200_200/0/1607371572626?e=2147483647&v=beta&t=U3ieMq4ZbmcTKe5iddsUx0DCX6OaJBX7e-lLHZP5d_w" //&auto=format&fit=crop&w=800&q=60
              alt="LeadersFluent Logo"
            />

            <Stack>
              <CardBody>
                <Heading size="md">
                  Director of Technology @ LeadersFluent
                </Heading>
                <Text py="2">Sept 2020 - June 2022</Text>
                <Text py="2">
                  Web Development, Content Creation, API Integration in HTML,
                  CSS, JavaScript, MailChimp and Wordpress.
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  onClick={leadersfluent}
                  variant="solid"
                  colorScheme="blue"
                >
                  Visit Website
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </>
  );
}
