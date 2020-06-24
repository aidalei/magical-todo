import React from "react";
import { View, Text } from "react-native";
import v4 from 'uid'

// TODO React-nativeで書き直す

const Top = () => {
  return (
    <div>
        <input></input>
        <button>add</button>
        <p>{v4()}</p>
        <ul>
            <li><p>some TODO</p><button>delete</button></li>
            <li><p>some TODO</p><button>delete</button></li>
            <li><p>some TODO</p><button>delete</button></li>
            <li><p>some TODO</p><button>delete</button></li>
            <li><p>some TODO</p><button>delete</button></li>
            <li><p>some TODO</p><button>delete</button></li>
        </ul>
    </div>
  );
};

export default Top;
