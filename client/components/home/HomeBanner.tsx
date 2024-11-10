import { View, Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { Image } from 'react-native';
import { bannerData } from '@/data/BannerData';

const width = Dimensions.get('window').width;

const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.bannerContainer}>
      <Carousel
        loop={true}
        width={width}
        height={175}
        autoPlayInterval={3000}
        autoPlay={true}
        data={bannerData}
        scrollAnimationDuration={600}
        onSnapToItem={(index) => setActiveIndex(index)} // Track active index
        renderItem={({ item }) => (
          <View style={styles.carouselItem}>
            <Image source={{ uri: item.image }} style={styles.bannerImage} />
          </View>
        )}
      />

      {/* Dots Indicator */}
      <View style={styles.dotContainer}>
        {bannerData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index && styles.activeDot, // Highlight the active dot
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 1,
    height: 175,
    position: 'relative',
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
  },
  bannerImage: {
    width: width - 10,
    height: 175,
    borderRadius: 5,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#4B0082', // Active dot color
    width: 10,
    height: 10,
  },
});
