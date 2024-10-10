package com.example.outilsservice;

import com.example.outilsservice.dao.OutilRepository;
import com.example.outilsservice.entities.Outil;
import com.example.outilsservice.service.OutilImpl;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;

import java.time.LocalDateTime;

@SpringBootApplication
@EnableDiscoveryClient
@AllArgsConstructor
@ComponentScan(basePackages = "com.example.outilsservice")
public class OutilServiceApplication implements CommandLineRunner {
    OutilImpl outilService;
	OutilRepository outilRepository;
	public static void main(String[] args) {

		SpringApplication.run(OutilServiceApplication.class, args);}
	@Override
	public void run(String... args) throws Exception {
		System.out.println("outils is running");

		Outil o1 = new Outil();


		o1.setDate(LocalDateTime.now());
		o1.setSource("source1");
		outilService.addOutil(o1);
		Outil o2 = new Outil();

		o2.setDate(LocalDateTime.now());
		o2.setSource("source2");
		outilService.addOutil(o2);

	}
}

