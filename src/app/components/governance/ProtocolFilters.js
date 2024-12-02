// import React from 'react';
// import Image from 'next/image';

// const ProtocolFilters = ({ selectedProtocol, setSelectedProtocol }) => {
//   const protocols = [
//     {
//       name: 'arbitrum',
//       displayName: 'Arbitrum',
//       icon: '/governance/arbitrum.svg',
//       color: '#2D374B',
//       hoverColor: '#374761',
//       textColor: '#28A0F0'
//     },
//     {
//       name: 'optimism',
//       displayName: 'Optimism',
//       icon: '/governance/optimism.svg',
//       color: '#FF0420',
//       hoverColor: '#ff1a1a',
//       textColor: '#ffffff'
//     },
//     {
//       name: 'uniswap',
//       displayName: 'Uniswap',
//       icon: '/governance/uniswap.svg',
//       color: '#FF007A',
//       hoverColor: '#ff1a8c',
//       textColor: '#ffffff'
//     },
//     {
//       name: 'ens',
//       displayName: 'ENS',
//       icon: '/governance/gnosis.svg',
//       color: '#5298FF',
//       hoverColor: '#66a3ff',
//       textColor: '#ffffff'
//     }
//   ];

//   return (
//     <div className="w-full flex gap-4">
//       {protocols.map((protocol) => (
//         <button
//           key={protocol.name}
//           onClick={() => setSelectedProtocol(selectedProtocol === protocol.name ? null : protocol.name)}
//           className={`
//             flex-1 flex items-center gap-3 px-4 py-2 rounded-lg
//             transition-all duration-200 ease-in-out
//             ${selectedProtocol === protocol.name ? 'ring-2 ring-opacity-50' : ''}
//           `}
//           style={{
//             backgroundColor: selectedProtocol === protocol.name ? protocol.hoverColor : protocol.color,
//             color: protocol.textColor,
//             boxShadow: selectedProtocol === protocol.name ? `0 0 20px ${protocol.color}40` : 'none'
//           }}
//         >
//           <div className="w-8 h-8 relative flex-shrink-0">
//             <Image
//               src={protocol.icon}
//               alt={`${protocol.name} icon`}
//               fill
//               className="object-contain"
//             />
//           </div>
//           <span className="font-semibold text-lg">
//             {protocol.displayName}
//           </span>
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ProtocolFilters;