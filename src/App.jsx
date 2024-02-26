import { useDispatch, useSelector } from "react-redux"; // Get the current state
// Use the actions diffined. Modify the values of the state - useDispatch
import { change, reset } from "./features/user";
import { changeColor, resetColor } from "./features/color";

import "./App.css";
import {
  Card,
  CardBody,
  Text,
  Image,
  Stack,
  Heading,
  ButtonGroup,
  Button,
  CardFooter,
  Divider,
} from "@chakra-ui/react";

function App() {
  const user = useSelector((state) => state.user.value);
  const color = useSelector((state) => state.color.value);

  // Change the values
  const dispach = useDispatch();
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color={color.colorValue} fontSize="2xl">
              ${user.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => {
                dispach(reset());
                dispach(resetColor());
              }}
            >
              Buy now
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => {
                dispach(change({ name: "", descriprtion: "This", price: 100 }));
                dispach(changeColor());
              }}
            >
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default App;
