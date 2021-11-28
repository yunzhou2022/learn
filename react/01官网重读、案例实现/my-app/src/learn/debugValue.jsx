import React,{useState, useDebugValue} from 'react'

export default function useDemo() {
    const [isOnline, setIsOnline] = useState(null);

    // ...
  
    // 在开发者工具中的这个 Hook 旁边显示标签
    // e.g. "FriendStatus: Online"
    useDebugValue(isOnline ? 'Online' : 'Offline');
  
    return isOnline;
}
