import React, { useState, useEffect } from 'react';
import mqtt from 'mqtt';

const mqtt = require('mqtt');

const IpAddress = 'mqtt://10.0.0.17';
const Topic = "test";
const Message = "time for an ice cream break";
const options = {
 username: '',
 password: '',
};

const client = mqtt.connect(IpAddress);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.publish(Topic, Message);
  client.end();
});

client.on('error', (err) => {
  console.error("error connecting to mqtt broker", err);
});

client.on('close', () => {
  console.log("Disonnected from Mqtt broker")
}) 
