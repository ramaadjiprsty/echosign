import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import images from "../../constants/images";

const Introduction = () => {
  return (
    <ScrollView className="">
      <View className="m-4">
        <View
          className="border-2 border-b-[6px] border-r-[6px] p-2"
          style={styles.radiusCard}
        >
          <Image
            source={images.introbanner}
            className="h-32 w-full"
            style={styles.radiusImage}
          />
          <Text className="text-2xl font-bold">
            Mari Mengenal Lebih Dalam Tentang Bahasa Isyarat Indonesia
          </Text>
        </View>
        <View
          className="border-2 border-b-[6px] border-r-[6px] p-2 mt-2 text-justify"
          style={styles.radiusCard}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  radiusCard: {
    borderRadius: 18,
  },
  radiusImage: {
    borderRadius: 10,
  },
  cardContent: {
    textAlign: "justify",
  },
});

export default Introduction;
