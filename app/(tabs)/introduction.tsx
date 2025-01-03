import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import images from "../../constants/images";

const Introduction = () => {
  return (
    <ScrollView className="">
      <View className="m-4">
        <View className="bg-black translate-x-1.5 translate-y-1.5">
        <View
          className="border-2 bg-white p-2 -translate-x-1.5 -translate-y-1.5"
        >
          <Image
            source={images.introbanner}
            className="h-32 w-full"
          />
          <Text className="text-2xl font-bold">
            Mari Mengenal Lebih Dalam Tentang Bahasa Isyarat Indonesia
          </Text>
        </View>
        </View>
        <View className="bg-black mt-4 translate-x-1.5 translate-y-1.5">
        <View
          className="border-2 p-2 bg-white  text-justify -translate-x-1.5 -translate-y-1.5"
          // style={styles.radiusCard}
        >
          <Text className="text-xl p-2" style={styles.cardContent}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic eum
            doloribus veritatis tempora esse temporibus quas omnis, voluptate
            similique suscipit? Ullam, quibusdam. Ex deserunt facilis iusto
            nobis doloremque quibusdam animi a labore similique saepe sequi
            suscipit quasi obcaecati modi debitis voluptates voluptate
            necessitatibus, odio unde! Reiciendis at, repellendus natus libero
            architecto quidem inventore culpa, molestiae deserunt tempora
            quaerat ab perferendis exercitationem, dolore unde recusandae
            mollitia. Harum maiores officia a voluptatem repellendus cupiditate
            incidunt debitis nobis quas eos quos laudantium temporibus corporis
            sint expedita similique perspiciatis, error eaque iure quidem
            accusamus nisi et eum! Perferendis eveniet voluptatibus, porro culpa
            laudantium ullam? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Excepturi nisi hic quo saepe. Optio, impedit minus ullam
            quisquam in aliquid beatae aspernatur libero, deserunt iste deleniti
            magni sequi harum vitae, dolore autem? Dolorem, minima? Rerum quas
            nemo adipisci mollitia amet. Optio facilis saepe totam iste maxime
            laboriosam eligendi corrupti dolorum qui eos nobis obcaecati
            explicabo earum esse cumque, nihil in voluptatem ad quae expedita
            nulla! Quas exercitationem atque ex quos vitae. Ipsa vel expedita
            sint omnis dolor a est id maiores, temporibus, accusamus libero nemo
            molestias aliquid provident delectus, placeat atque? Eligendi
            praesentium illo assumenda perspiciatis blanditiis repudiandae,
            doloremque consequuntur.
          </Text>
        </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  radiusCard: {
    marginTop: 10,
  },
  radiusImage: {
    borderRadius: 10,
  },
  cardContent: {
    textAlign: "justify",
  },
});

export default Introduction;
