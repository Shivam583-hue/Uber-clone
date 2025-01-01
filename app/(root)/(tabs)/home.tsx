import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex justify-center items-center">
      <Text className="text-blue-500">Home</Text>
    </SafeAreaView>
  )
}

export default Home;