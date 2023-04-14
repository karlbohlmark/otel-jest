import { NodeSDK } from '@opentelemetry/sdk-node'
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto'

const traceExporter = new OTLPTraceExporter()
const sdk = new NodeSDK({
    traceExporter,
    instrumentations: [new HttpInstrumentation()],
})
sdk.start()

import * as http from 'http'

http.get('http://localhost:8080')