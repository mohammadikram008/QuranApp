import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image , ScrollView,ActivityIndicator} from 'react-native'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const AllSurah = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
const [value,setValue]=useState("")
// const navigations = useNavigation();

const data={
  chapters:
[
  {"id":1,"name_simple":"Al-Fatihah","name_complex":"Al-Fātiĥah","name_arabic":"الفاتحة",},
  {"id":2,"name_simple":"Al-Baqarah","name_complex":"Al-Baqarah","name_arabic":"البقرة",},
  {"id":3,"name_simple":"Ali 'Imran","name_complex":"Āli `Imrān","name_arabic":"آل عمران",},
  {"id":4,"name_simple":"An-Nisa","name_complex":"An-Nisā","name_arabic":"النساء",},
  {"id":5,"name_simple":"Al-Ma'idah","name_complex":"Al-Mā'idah","name_arabic":"المائدة",},
  {"id":6,"name_simple":"Al-An'am","name_complex":"Al-'An`ām","name_arabic":"الأنعام",},
  {"id":7,"name_simple":"Al-A'raf","name_complex":"Al-'A`rāf","name_arabic":"الأعراف",},
  {"id":8,"name_simple":"Al-Anfal","name_complex":"Al-'Anfāl","name_arabic":"الأنفال",},
  {"id":9,"name_simple":"At-Tawbah","name_complex":"At-Tawbah","name_arabic":"التوبة",},
  {"id":10,"name_simple":"Yunus","name_complex":"Yūnus","name_arabic":"يونس",},
{"id":11,"name_simple":"Hud","name_complex":"Hūd","name_arabic":"هود",},
{"id":12,"name_simple":"Yusuf","name_complex":"Yūsuf","name_arabic":"يوسف",},
{"id":13,"name_simple":"Ar-Ra'd","name_complex":"Ar-Ra`d","name_arabic":"الرعد",},
{"id":14,"name_simple":"Ibrahim","name_complex":"Ibrāhīm","name_arabic":"ابراهيم",},
{"id":15,"name_simple":"Al-Hijr","name_complex":"Al-Ĥijr","name_arabic":"الحجر",},
{"id":16,"name_simple":"An-Nahl","name_complex":"An-Naĥl","name_arabic":"النحل",},
{"id":17,"name_simple":"Al-Isra","name_complex":"Al-'Isrā","name_arabic":"الإسراء",},
{"id":18,"name_simple":"Al-Kahf","name_complex":"Al-Kahf","name_arabic":"الكهف",},
{"id":19,"name_simple":"Maryam","name_complex":"Maryam","name_arabic":"مريم",},
{"id":20,"name_simple":"Taha","name_complex":"Ţāhā","name_arabic":"طه",},
{"id":21,"name_simple":"Al-Anbya","name_complex":"Al-'Anbyā","name_arabic":"الأنبياء",},
{"id":22,"name_simple":"Al-Hajj","name_complex":"Al-Ĥajj","name_arabic":"الحج",},
{"id":23,"name_simple":"Al-Mu'minun","name_complex":"Al-Mu'minūn","name_arabic":"المؤمنون",},
{"id":24,"name_simple":"An-Nur","name_complex":"An-Nūr","name_arabic":"النور",},
{"id":25,"name_simple":"Al-Furqan","name_complex":"Al-Furqān","name_arabic":"الفرقان",},
{"id":26,"name_simple":"Ash-Shu'ara","name_complex":"Ash-Shu`arā","name_arabic":"الشعراء",},
{"id":27,"name_simple":"An-Naml","name_complex":"An-Naml","name_arabic":"النمل",},
{"id":28,"name_simple":"Al-Qasas","name_complex":"Al-Qaşaş","name_arabic":"القصص",},
{"id":29,"name_simple":"Al-'Ankabut","name_complex":"Al-`Ankabūt","name_arabic":"العنكبوت",},
{"id":30,"name_simple":"Ar-Rum","name_complex":"Ar-Rūm","name_arabic":"الروم",},
{"id":31,"name_simple":"Luqman","name_complex":"Luqmān","name_arabic":"لقمان",},
{"id":32,"name_simple":"As-Sajdah","name_complex":"As-Sajdah","name_arabic":"السجدة",},
{"id":33,"name_simple":"Al-Ahzab","name_complex":"Al-'Aĥzāb","name_arabic":"الأحزاب",},
{"id":34,"name_simple":"Saba","name_complex":"Saba","name_arabic":"سبإ",},
{"id":35,"name_simple":"Fatir","name_complex":"Fāţir","name_arabic":"فاطر",},
{"id":36,"name_simple":"Ya-Sin","name_complex":"Yā-Sīn","name_arabic":"يس",},
{"id":37,"name_simple":"As-Saffat","name_complex":"Aş-Şāffāt","name_arabic":"الصافات",},
{"id":38,"name_simple":"Sad","name_complex":"Şād","name_arabic":"ص",},
{"id":39,"name_simple":"Az-Zumar","name_complex":"Az-Zumar","name_arabic":"الزمر",},
{"id":40,"name_simple":"Ghafir","name_complex":"Ghāfir","name_arabic":"غافر",},
{"id":41,"name_simple":"Fussilat","name_complex":"Fuşşilat","name_arabic":"فصلت",},
{"id":42,"name_simple":"Ash-Shuraa","name_complex":"Ash-Shūraá","name_arabic":"الشورى",},
{"id":43,"name_simple":"Az-Zukhruf","name_complex":"Az-Zukhruf","name_arabic":"الزخرف",},
{"id":44,"name_simple":"Ad-Dukhan","name_complex":"Ad-Dukhān","name_arabic":"الدخان",},
{"id":45,"name_simple":"Al-Jathiyah","name_complex":"Al-Jāthiyah","name_arabic":"الجاثية",},
{"id":46,"name_simple":"Al-Ahqaf","name_complex":"Al-'Aĥqāf","name_arabic":"الأحقاف",},
{"id":47,"name_simple":"Muhammad","name_complex":"Muĥammad","name_arabic":"محمد",},
{"id":48,"name_simple":"Al-Fath","name_complex":"Al-Fatĥ","name_arabic":"الفتح",},
{"id":49,"name_simple":"Al-Hujurat","name_complex":"Al-Ĥujurāt","name_arabic":"الحجرات",},
{"id":50,"name_simple":"Qaf","name_complex":"Qāf","name_arabic":"ق",},
{"id":51,"name_simple":"Adh-Dhariyat","name_complex":"Adh-Dhāriyāt","name_arabic":"الذاريات",},
{"id":52,"name_simple":"At-Tur","name_complex":"Aţ-Ţūr","name_arabic":"الطور",},
{"id":53,"name_simple":"An-Najm","name_complex":"An-Najm","name_arabic":"النجم",},
{"id":54,"name_simple":"Al-Qamar","name_complex":"Al-Qamar","name_arabic":"القمر",},
{"id":55,"name_simple":"Ar-Rahman","name_complex":"Ar-Raĥmān","name_arabic":"الرحمن",},
{"id":56,"name_simple":"Al-Waqi'ah","name_complex":"Al-Wāqi`ah","name_arabic":"الواقعة",},
{"id":57,"name_simple":"Al-Hadid","name_complex":"Al-Ĥadīd","name_arabic":"الحديد",},
{"id":58,"name_simple":"Al-Mujadila","name_complex":"Al-Mujādila","name_arabic":"المجادلة",},
{"id":59,"name_simple":"Al-Hashr","name_complex":"Al-Ĥashr","name_arabic":"الحشر",},
{"id":60,"name_simple":"Al-Mumtahanah","name_complex":"Al-Mumtaĥanah","name_arabic":"الممتحنة",},
{"id":61,"name_simple":"As-Saf","name_complex":"Aş-Şaf","name_arabic":"الصف",},
{"id":62,"name_simple":"Al-Jumu'ah","name_complex":"Al-Jumu`ah","name_arabic":"الجمعة",},
{"id":63,"name_simple":"Al-Munafiqun","name_complex":"Al-Munāfiqūn","name_arabic":"المنافقون",},
{"id":64,"name_simple":"At-Taghabun","name_complex":"At-Taghābun","name_arabic":"التغابن",},
{"id":65,"name_simple":"At-Talaq","name_complex":"Aţ-Ţalāq","name_arabic":"الطلاق",},
{"id":66,"name_simple":"At-Tahrim","name_complex":"At-Taĥrīm","name_arabic":"التحريم",},
{"id":67,"name_simple":"Al-Mulk","name_complex":"Al-Mulk","name_arabic":"الملك",},
{"id":68,"name_simple":"Al-Qalam","name_complex":"Al-Qalam","name_arabic":"القلم",},
{"id":69,"name_simple":"Al-Haqqah","name_complex":"Al-Ĥāqqah","name_arabic":"الحاقة",},
{"id":70,"name_simple":"Al-Ma'arij","name_complex":"Al-Ma`ārij","name_arabic":"المعارج",},
{"id":71,"name_simple":"Nuh","name_complex":"Nūĥ","name_arabic":"نوح",},
{"id":72,"name_simple":"Al-Jinn","name_complex":"Al-Jinn","name_arabic":"الجن",},
{"id":73,"name_simple":"Al-Muzzammil","name_complex":"Al-Muzzammil","name_arabic":"المزمل",},
{"id":74,"name_simple":"Al-Muddaththir","name_complex":"Al-Muddaththir","name_arabic":"المدثر",},
{"id":75,"name_simple":"Al-Qiyamah","name_complex":"Al-Qiyāmah","name_arabic":"القيامة",},
{"id":76,"name_simple":"Al-Insan","name_complex":"Al-'Insān","name_arabic":"الانسان",},
{"id":77,"name_simple":"Al-Mursalat","name_complex":"Al-Mursalāt","name_arabic":"المرسلات",},
{"id":78,"name_simple":"An-Naba","name_complex":"An-Naba","name_arabic":"النبإ",},
{"id":79,"name_simple":"An-Nazi'at","name_complex":"An-Nāzi`āt","name_arabic":"النازعات",},
{"id":80,"name_simple":"'Abasa","name_complex":"`Abasa","name_arabic":"عبس",},
{"id":81,"name_simple":"At-Takwir","name_complex":"At-Takwīr","name_arabic":"التكوير",},
{"id":82,"name_simple":"Al-Infitar","name_complex":"Al-'Infiţār","name_arabic":"الإنفطار",},
{"id":83,"name_simple":"Al-Mutaffifin","name_complex":"Al-Muţaffifīn","name_arabic":"المطففين",},
{"id":84,"name_simple":"Al-Inshiqaq","name_complex":"Al-'Inshiqāq","name_arabic":"الإنشقاق",},
{"id":85,"name_simple":"Al-Buruj","name_complex":"Al-Burūj","name_arabic":"البروج",},
{"id":86,"name_simple":"At-Tariq","name_complex":"Aţ-Ţāriq","name_arabic":"الطارق",},
{"id":87,"name_simple":"Al-A'la","name_complex":"Al-'A`lá","name_arabic":"الأعلى",},
{"id":88,"name_simple":"Al-Ghashiyah","name_complex":"Al-Ghāshiyah","name_arabic":"الغاشية",},
{"id":89,"name_simple":"Al-Fajr","name_complex":"Al-Fajr","name_arabic":"الفجر",},
{"id":90,"name_simple":"Al-Balad","name_complex":"Al-Balad","name_arabic":"البلد",},
{"id":91,"name_simple":"Ash-Shams","name_complex":"Ash-Shams","name_arabic":"الشمس",},
{"id":92,"name_simple":"Al-Layl","name_complex":"Al-Layl","name_arabic":"الليل",},
{"id":93,"name_simple":"Ad-Duhaa","name_complex":"Ađ-Đuĥaá","name_arabic":"الضحى",},
{"id":94,"name_simple":"Ash-Sharh","name_complex":"Ash-Sharĥ","name_arabic":"الشرح",},
{"id":95,"name_simple":"At-Tin","name_complex":"At-Tīn","name_arabic":"التين",},
{"id":96,"name_simple":"Al-'Alaq","name_complex":"Al-`Alaq","name_arabic":"العلق",},
{"id":97,"name_simple":"Al-Qadr","name_complex":"Al-Qadr","name_arabic":"القدر",},
{"id":98,"name_simple":"Al-Bayyinah","name_complex":"Al-Bayyinah","name_arabic":"البينة",},
{"id":99,"name_simple":"Az-Zalzalah","name_complex":"Az-Zalzalah","name_arabic":"الزلزلة",},
{"id":100,"name_simple":"Al-'Adiyat","name_complex":"Al-`Ādiyāt","name_arabic":"العاديات",},
{"id":101,"name_simple":"Al-Qari'ah","name_complex":"Al-Qāri`ah","name_arabic":"القارعة",},
{"id":102,"name_simple":"At-Takathur","name_complex":"At-Takāthur","name_arabic":"التكاثر",},
{"id":103,"name_simple":"Al-'Asr","name_complex":"Al-`Aşr","name_arabic":"العصر",},
{"id":104,"name_simple":"Al-Humazah","name_complex":"Al-Humazah","name_arabic":"الهمزة",},
{"id":105,"name_simple":"Al-Fil","name_complex":"Al-Fīl","name_arabic":"الفيل",},
{"id":106,"name_simple":"Quraysh","name_complex":"Quraysh","name_arabic":"قريش",},
{"id":107,"name_simple":"Al-Ma'un","name_complex":"Al-Mā`ūn","name_arabic":"الماعون",},
{"id":108,"name_simple":"Al-Kawthar","name_complex":"Al-Kawthar","name_arabic":"الكوثر",},
{"id":109,"name_simple":"Al-Kafirun","name_complex":"Al-Kāfirūn","name_arabic":"الكافرون",},
{"id":110,"name_simple":"An-Nasr","name_complex":"An-Naşr","name_arabic":"النصر",},
{"id":111,"name_simple":"Al-Masad","name_complex":"Al-Masad","name_arabic":"المسد",},
{"id":112,"name_simple":"Al-Ikhlas","name_complex":"Al-'Ikhlāş","name_arabic":"الإخلاص",},
{"id":113,"name_simple":"Al-Falaq","name_complex":"Al-Falaq","name_arabic":"الفلق",},
{"id":114,"name_simple":"An-Nas","name_complex":"An-Nās","name_arabic":"الناس",}
]};

const url = 'https://quran-com.p.rapidapi.com/chapters?language=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cff1897834msha86dd5dbb4352e7p1a88e4jsn121c43276b3b',
		'X-RapidAPI-Host': 'quran-com.p.rapidapi.com'
	}
};

const handleChange=(id)=>{
  setLoading(true);
console.log("id",id)
axios.get(`https://api.alquran.cloud/v1/surah/${id}`).then((res)=>{
    console.log("data",res)
    setValue(res.data);
    setLoading(false);
    navigation.navigate('ShowSurah', { data: res.data });

  }).catch((error)=>{
    console.log("ERROR",error)
  })

}
const Card = ({ chapter }) => (
  
  <View >
    <TouchableOpacity style={styles.card} onPress={()=>handleChange(chapter.id)}>

    <Text style={styles.name}>{chapter.name_simple}</Text>
    <Text style={styles.translatedName}>{chapter.name_arabic}</Text>
    </TouchableOpacity>
  </View>
);
  // useEffect(() => {  
  //   console.log("avaiable");
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.text();
  //       setValue(result);
  //       console.log("values", result);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData().catch((error) => {
  //     console.error(error);
  //   });
  // }, []);
 console.log("data",data.chapters)
    return (
      <ScrollView contentContainerStyle={styles.container}>
     
        
      {loading ? (
        <View style={styles.loader}>

          <ActivityIndicator  size="large" color="blue" />
        </View>
        ) : (
          data.chapters.map((chapter) => (
          <Card key={chapter.id} chapter={chapter} />
          ))
        )}
        
     
    </ScrollView>
      //   <View style={styles.container}>
      
      //    <View style={styles.buttonContainer}>
        
      
      //      {/* <TouchableOpacity 
      //        mode="contained"
      //       //  icon={() => <FontAwesome5 name="book" size={20} color="#ffffff" />}
      //        style={styles.button}
      //        labelStyle={styles.buttonText}
      //        onPress={() => navigation.navigate('ArabicMain')}
      //      >
      //       <FontAwesome5 name="book" size={20} color="#ffffff" />
      //         <Text style={styles.buttonText}>Arabic Version</Text>
         
      //      </TouchableOpacity >
      //      <TouchableOpacity
      //        mode="contained"
      //       //  icon={() => <FontAwesome5 name="question" size={20} color="#ffffff" />}
      //        style={styles.button}
      //        labelStyle={styles.buttonText}
      //        onPress={() => navigation.navigate('English')}
      //      >
      //       <FontAwesome5 name="book" size={20} color="#ffffff" />
      //       <Text style={styles.buttonText}>English Version  </Text> 
      //      </TouchableOpacity>
      //      <TouchableOpacity
      //        mode="contained"
      //       //  icon={() =><FontAwesome5 name="sms" size={20} color="#ffffff" />}
      //        style={styles.button}
      //        labelStyle={styles.buttonText}
      //        onPress={() => navigation.navigate('Other')}
      //      >
      //       <FontAwesome5 name="sms" size={20} color="#ffffff" />
      //      <Text style={styles.buttonText}> Other Version </Text>  
      //      </TouchableOpacity>
        
    
      //      */}
      //    </View>
      //    {/* <View style={styles.advertisingContainer}>
      //      <Text style={styles.advertisingText}>Advertisement</Text>
      //    </View> */}
      //  </View>
        // <View>

        //     <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:50 }}>
        //         <Button title="Arabic Version" onPress={() => navigation.navigate('ArabicMain')} />
        //     </View>

        //     <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:50 }}>
        //         <Button title="English Version" onPress={() => navigation.navigate('English')} />
        //     </View>

        //     <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:50 }}>
        //         <Button title="Other Version" onPress={() => navigation.navigate('Other')} />
        //     </View>

        //     <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:50}}>
        //         <Image source = {require('../ad.png')} style={{width:200,height:200}} />
        //     </View>

        // </View>
    )
}
const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   // justifyContent: 'center',
    //   alignItems: 'center',
    //   marginTop:50,
    //   backgroundColor: '#ffffff',
    // },
    // buttonContainer: {
    //   flexDirection: 'row',
    //   flexWrap: 'wrap',
    //   justifyContent: 'center',
    //   marginBottom: 20,
    // },
    // button: {
    //   width: '80%',
    //   height: 100,
    //   margin: 5,
    //   borderRadius: 10,
    //   backgroundColor: '#4287f5',
    //   justifyContent: 'center',
    //   alignItems: 'center',
      
    // },
    // buttonText: {
    //   color: '#ffffff',
    //   fontSize: 16,
    //   fontWeight: 'bold',
    // },
    // advertisingContainer: {
    //   width: '80%',
    //   height: '30%',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#d3d3d3',
    //   borderRadius: 8,
    //   padding: 16,
    //   shadowColor: '#000000',
    //   shadowOffset: { width: 0, height: 2 },
    //   shadowOpacity: 0.3,
    //   shadowRadius: 10,
    //   elevation: 50,
    // },
    // advertisingText: {
    //   color: '#333333',
    //   fontSize: 20,
    //   fontWeight: 'bold',
    // },
    container: {
      paddingVertical: 20,
    },
    card: {
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor: '#708090',
      marginVertical: 10,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      margin:"4%"
    },
    loader:{
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      width:"100%",
      height:'100%'
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color:'#ffffff'
    },
    translatedName: {
      fontSize: 16,
   color:'#ffffff'
    },
  });
export default AllSurah