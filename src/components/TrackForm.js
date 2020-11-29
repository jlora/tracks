import React, { useContext } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const { state: { name, recording, locations }, 
    startRecording, 
    stopRecording, 
    changeName 
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
  return <View>
    <Spacer>
      <Input value={name} onChangeText={changeName} placeholder='Enter name' />
      { recording ? ( 
        <Button title='Stop Recording' onPress={stopRecording} />
      ) : ( 
        <Button title='Start Recording' onPress={startRecording} />
      )}
      {!recording && locations.length ? (
        <Button title='Save Recording' style={{ marginTop: 10}} onPress={saveTrack} />
      ) : null } 
    </Spacer>
  </View>
};

export default TrackForm;
