import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "./components/Participant";
import { format } from "date-fns";

export default function Home() {
  function handleParticipantAdd() {
    console.log("clicou");
  }

  function handleParticipantRemove(name: string) {
    console.log(`Removeu o ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Quinta, 1 de Fevereiro de 2024</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant
        key={1}
        name="Bernardo Padilha"
        onRemove={() => handleParticipantRemove}
      />
      <Participant
        key={2}
        name="Rafael Pereira"
        onRemove={() => handleParticipantRemove}
      />
      <Participant
        key={3}
        name="Ana Clara Freitas "
        onRemove={() => handleParticipantRemove}
      />

      <StatusBar style="auto" />
    </View>
  );
}
