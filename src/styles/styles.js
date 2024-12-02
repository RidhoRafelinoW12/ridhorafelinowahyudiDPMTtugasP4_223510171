import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#D50000",
  },
  scoresContainer: {
    flexDirection: 'row', // Mengatur arah menjadi horizontal
    justifyContent: 'space-around', // Menjaga jarak antar elemen
    alignItems: 'center', // Mengatur elemen agar sejajar secara vertikal
    width: '100%', // Menggunakan lebar penuh
    paddingHorizontal: 20, // Memberikan padding horizontal
  },
  teamContainer: {
    marginVertical: 15,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#D50000",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },
  teamLogo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  teamName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000000",
  },
  score: {
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#D50000",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
},
buttonText:{
fontSize:20,
color:"#fff",
},
resetButton:{
marginTop:20,
backgroundColor:"#FF0000",
padding:10,
borderRadius:5,
},
resetButtonText:{
color:"#fff",
fontSize:16,
},
});

export default styles;