import { connect } from "mqtt"
import { writable } from 'svelte/store';

const mqttClient = connect('wss://test.mosquitto.org:8081');

export const power = writable(0);

mqttClient.on('connect', () => {
  mqttClient.subscribe('power');
});

mqttClient.on('message', (topic, message) => {
  if (topic === 'power') {
    power.set(parseInt(message.toString()));
  }
});

export function setPower(value: number) {
  mqttClient.publish('power', value.toString());
}