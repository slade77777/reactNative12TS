import React, {FC, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Clock: FC = () => {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(second);
      if (second < 10) {
        setSecond(second + 1);
      } else {
        if (minute === 10) {
          setHour(hour + 1);
          setMinute(0);
        } else {
          setMinute(minute + 1);
        }
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [second, minute]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.text}>{hour}</Text>
      <Text style={styles.text}>{minute}</Text>
      <Text style={styles.text}>{second}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginVertical: 30,
    fontSize: 30,
  },
});

export default Clock;
