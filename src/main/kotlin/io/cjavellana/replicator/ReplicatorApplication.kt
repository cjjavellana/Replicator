package io.cjavellana.replicator

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ReplicatorApplication

fun main(args: Array<String>) {
	runApplication<ReplicatorApplication>(*args)
}
