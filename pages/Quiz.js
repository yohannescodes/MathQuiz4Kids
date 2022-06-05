import React, {useState} from 'react'
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'
import CountDown from 'react-native-countdown-component';
import 'react-native-gesture-handler';

export default function Quiz({route, navigation}) {
  const firstNumber = Math.floor(Math.random()* 10) + 1
  const secondNumber= Math.floor(Math.random() * 10) + 1
  
  const randomAnswer1 = Math.floor(Math.random()* 10) + 1
  const randomAnswer2 = Math.floor(Math.random()* 10) + 1
  
  const {operator, initScore, initialTime} = route.params;
  let score = initScore

  let o1 = 0
  let o2 = 0
  if(randomAnswer1 != randomAnswer2){
    o1 = randomAnswer1
    o2 = randomAnswer2
  }
  else{
    let o2 = Math.floor(Math.random() *10) +1
  }
  let x = firstNumber
  let y = secondNumber
  let sign = operator

  let answer = calculateAnswer(firstNumber, sign, secondNumber)
  let [answerText, setAnswerText] = useState("?")

  let options = [o1, answer, o2]
  let indices = generateRandomIndices()

  return (
    <View style={styles.parentView}>
        <View style={styles.headerView}>
          <View style={styles.scoreBoard}>
            <Text style={styles.scoreText}>Score: {score}</Text>
          </View>
          <View style={styles.timerBoard}>
          <CountDown
            until={initialTime}
            timeToShow={['M', 'S']}
            digitTxtStyle={{color: 'white'}}
            onFinish={() => {alert('Game Over')
             navigation.navigate('Option')}}
          />
          </View>
        </View>
        <ImageBackground source = {require('../assets/gameBackground.jpg')} style={{width: 428, height: 904, borderRadius: 30}}>
          <View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Option')}}>
              <Image source={require('../assets/Undo.png')} style={{width: 49, height: 55, top: 31}} />
            </TouchableOpacity>
          </View>
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>{x}{sign}{y}={answerText}</Text>
          </View>
          <View style={styles.verticalBtnStalk}>
              <View style={styles.upperHorizontalBtnStalk}>
                <View style={styles.leftBtnBox}>
                  <TouchableOpacity onPress={()=> {
                    if(options[indices[0]] == answer){
                      score+=10
                      setAnswerText(answer.toString())
                      navigation.push('Quiz', {operator: sign, initScore: score, initialTime: 60})
                      }
                      else{
                        alert('Wrong Answer! The answer is ' + answer.toString())
                        navigation.navigate('Option')
                      }}}>
                    <View style={styles.answerBtn}>
                      <Text style={styles.answerTxt}>{options[indices[0]]}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.rightBtnBox}>
                  <TouchableOpacity onPress={()=> {
                    if(options[indices[1]] == answer){
                      score+=10
                      setAnswerText(answer.toString())
                      navigation.push('Quiz', {operator: sign, initScore: score, initialTime: 60})
                      }
                      else{
                        alert('Wrong Answer! The answer is ' + answer.toString())
                        navigation.navigate('Option')
                      }
                      }}>
                    <View style={styles.answerBtn}>
                      <Text style={styles.answerTxt}>{options[indices[1]]}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.lowerHorizontalBtnStalk}>
                <View>
                  <TouchableOpacity onPress={()=> {
                    if(options[indices[2]] == answer){
                      score+=10
                      setAnswerText(answer.toString())
                      navigation.push('Quiz', {operator: sign, initScore: score, initialTime: 60})
                      }
                      else{
                        alert('Wrong Answer! The answer is ' + answer.toString())
                        navigation.navigate('Option')
                      }}}>
                    <View style={styles.answerBtn}>
                      <Text style={styles.answerTxt}>{options[indices[2]]}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
        </ImageBackground>
    </View>
  )
  }

function generateRandomIndices(){
  var indices = []
  indices[0] = Math.floor(Math.random() * 2 + 1)
  if(indices[0] == 0){
    indices[1] = 1
    indices[2] = 2
  }
  else if(indices[0] == 1){
     indices[1] = 2
     indices[2] = 0
  }
  else if(indices[0] == 2){
    indices[1] = 0
    indices[2] = 1
  }
  return indices
}



function calculateAnswer(x, sign, y){
      switch(sign){
        case '+':{
          return x + y
          break
        }
        case '-':{
          return x - y
          break
        }
        case '*':{
          return x * y
          break
        }
        case '/':{
          return x / y
          break
        }
      }
}

const styles = StyleSheet.create({
  parentView:{
    top: 40,
    backgroundColor: '#f5d45c'
  },
  headerView:{
    flexDirection: 'row',
    height: 46
  },
  scoreBoard:{
    flex: 1,
    paddingTop: 12,
    paddingLeft: 32,
    paddingBottom: 10,
  },
  scoreText:{
    fontWeight: '800',
    fontSize: 18,
    lineHeight: 22,
    color: 'white'
  },
  timerBoard:{
    flex: 1,
    paddingTop: 5,
    paddingLeft: 93,
    paddingRight: 29,
    paddingBottom: 10,
  },
  timerText: {
    fontWeight: '800',
    fontSize: 18,
    lineHeight: 22,
    color: 'white'
  },
  questionBox:{
    top: 197,
    left: 81,
    right: 80
  },
  questionText:{
    fontWeight: '800',
    fontSize: 68,
    lineHeight: 82,
    color: 'white'
  },
  verticalBtnStalk:{
    flexDirection: 'column',
    top: 250
  },
  upperHorizontalBtnStalk:{
    flexDirection: 'row',
    flex: 1
  },
  lowerHorizontalBtnStalk:{
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    top: 109
  },
  leftBtnBox:{
    flex: 1,
    alignItems: 'center'
  },
  rightBtnBox:{
    flex: 1,
    alignItems: 'center'
  },
  answerBtn:{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f5d45c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answerTxt:{
    fontWeight: '800',
    fontSize: 31,
    lineHeight: 38,
    color: 'white'
  },
  correctBtn:{
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
})
