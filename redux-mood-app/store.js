const moods = {initial: '( ´ー`)', happy: 'UwU', sad: ';_;', angry: '⋋_⋌', confused: '●.◉'};

const INITIAL_STATE = { mood: moods.initial };

function moodReducer(state=INITIAL_STATE, action) {
    switch (action.type) {
        case "happy":
          return { mood: moods.happy };
    
        case "sad":
          return { mood: moods.sad };

        case "angry":
            return { mood: moods.angry };

        case "confused":
            return { mood: moods.confused };
    
        default:
          return state;
      }
}

const store = Redux.createStore(moodReducer);
