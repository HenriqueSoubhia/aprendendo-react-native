import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "3ds",
    value: "519,98",
    date: "05/10/2023",
    type: 0,
  },

  {
    id: 2,
    label: "Divida do tep",
    value: "16,00",
    date: "04/10/2023",
    type: 1,
  },

  {
    id: 3,
    label: "Salário da LOUD",
    value: "500.000,00",
    date: "05/10/2023",
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="sopa shubia" />

      <Balance saldo="9.250,90" gastos="-519,98" />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginLeft: 14,
    marginRight: 14,
  },
});
