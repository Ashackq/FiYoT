import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import Sidemenu from './sidemenu';
import { colors } from '../devdata/constants/lang';
import Ham from '../devdata/assets/ham.png'


const Header = (navigation) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [isMenuOpen, setmenuopen] = useState(false);

  const toggleSideMenu = () => {
    setmenuopen(!isMenuOpen);
    setTimeout(() => {
      setShowSideMenu((prevIsMenuOpen) => !prevIsMenuOpen);
    }, 300);
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleSideMenu} style={styles.headerButton}>
        <Image source={Ham} style={styles.icon} />
      </TouchableOpacity>

      {showSideMenu && (
        <TouchableOpacity
          onPress={toggleSideMenu}
          style={styles.sideMenuOverlay}
          activeOpacity={1}
        />
      )}
      <View style={styles.side}>
        {showSideMenu && (
          <Sidemenu
            toggleSideMenu={toggleSideMenu}
            isMenuOpen={isMenuOpen}
            navigation={navigation}
          />
        )}
      </View>
      <View>
        <Text style={styles.headerTitle}>{'Welcome to Fiyot)'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,
    background: 'transperent',
    backgroundColor: colors.headfoot,
    justifyContent: 'center',
    alignContent: 'center',
  },
  sideMenuOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 500,
    height: 1000,
  },
  headerButton: {
    padding: 10,
    backgroundColor: colors.headfootbutton,
    elevation: 10,
    borderRadius: 12,
    position: 'absolute',
    left: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    zIndex: 1,
  },
  icon: {
    width: 25,
    height: 25,
  },
  side: {
    zIndex: 100,
    top: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

const styless = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
export default Header;
