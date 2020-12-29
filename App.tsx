import React, {useEffect, useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import NativeAdView, {
  CallToActionView,
  IconView,
  HeadlineView,
  TaglineView,
  AdvertiserView,
  AdBadge,
  AdManager,
} from 'react-native-admob-native-ads';

const config = {
  testDeviceIds: ['YOUR_TEST_DEVICE_ID'],
  maxAdContetRating: 'MA',
  tagForChildDirectedTreatment: false,
  tagForUnderAgeConsent: false,
};

AdManager.setRequestConfiguration(config);

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AntDesign name='search1' size={50} color='black' />
      <View
        style={{
          flex: 1,
        }}
      >
        <NativeAdView
          requestNonPersonalizedAdsOnly={false}
          style={{
            width: '95%',
            alignSelf: 'center',
            height: 100,
          }}
          adUnitID='ca-app-pub-3940256099942544/2247696110' // TEST adUnitID
        >
          <View
            style={{
              height: 100,
              width: '100%',
            }}
          >
            <AdBadge />
            <View
              style={{
                height: 100,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}
            >
              <IconView
                style={{
                  width: 60,
                  height: 60,
                }}
              />
              <View
                style={{
                  width: '65%',
                  maxWidth: '65%',
                  paddingHorizontal: 6,
                }}
              >
                <HeadlineView
                  style={{
                    fontWeight: 'bold',
                    fontSize: 13,
                  }}
                />
                <TaglineView
                  numberOfLines={1}
                  style={{
                    fontSize: 11,
                  }}
                />
                <AdvertiserView
                  style={{
                    fontSize: 10,
                    color: 'gray',
                  }}
                />
              </View>

              <CallToActionView
                style={{
                  height: 45,
                  paddingHorizontal: 12,
                  backgroundColor: 'purple',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 5,
                  elevation: 10,
                }}
                textStyle={{color: 'white', fontSize: 14}}
              />
            </View>
          </View>
        </NativeAdView>
      </View>
    </View>
  );
};

export default App;
