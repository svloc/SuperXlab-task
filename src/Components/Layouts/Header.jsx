import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import { InputText } from 'primereact/inputtext';
import loginImg from '../../Assets/login-img.jpg';
import './Layout.css';

export default function Header() {
  const items = [
    {
      label: 'Videos', icon: 'pi pi-fw pi-video',
      items: [
        [
          {
            label: 'Video 1',
            items: [{ label: 'Video 1.1' }, { label: 'Video 1.2' }]
          },
        ],
      ]
    },
    {
      label: 'Users', icon: 'pi pi-fw pi-users',
      items: [
        [
          {
            label: 'User 1',
            items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
          },
        ],
      ]
    },
    {
      label: 'Events', icon: 'pi pi-fw pi-calendar',
      items: [
        [
          {
            label: 'Event 1',
            items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
          },
        ],
      ]
    },
    {
      label: 'Settings', icon: 'pi pi-fw pi-cog',
      items: [
        [
          {
            label: 'Setting 1',
            items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
          },
        ],
      ]
    }
  ];

  const start = <img alt="logo" src={loginImg} height="40" className="mr-2"></img>;
  const end = <InputText placeholder="Search" type="text"  className="p-inputtext-sm"/>;

  return (
    <div className="card">
      <MegaMenu model={items} orientation="horizontal" start={start} end={end} breakpoint="960px" />
    </div>
  )
}