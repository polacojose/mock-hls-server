#!/usr/bin/env node

const commandLineArgs = require("command-line-args");
const MockHLSServer = require("../src/mock-hls-server");

const optionDefinitions = [
  {
    name: "host",
    type: String,
    defaultOption: true,
    defaultValue: "localhost",
  },
  { name: "port", type: Number, alias: "p", defaultValue: 8080 },
  { name: "proxyPort", type: Number, alias: "x", defaultValue: 8080 },
  { name: "windowSize", type: Number, defaultValue: 10 },
  { name: "initialDuration", type: Number, defaultValue: 10 },
  { name: "event", type: Boolean, defaultValue: false },
  { name: "loop", type: Boolean, defaultValue: false },
  { name: "logLevel", type: String, defaultValue: "info" },
];

const {
  host,
  port,
  proxyPort,
  windowSize,
  initialDuration,
  event,
  loop,
  logLevel,
} = commandLineArgs(optionDefinitions);
new MockHLSServer({
  host,
  port,
  proxyPort,
  windowSize: event ? null : windowSize,
  initialDuration,
  loop,
  logLevel,
});
