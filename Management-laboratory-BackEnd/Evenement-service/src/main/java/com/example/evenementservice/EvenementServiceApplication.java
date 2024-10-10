package com.example.evenementservice;
import java.time.LocalDateTime;
import java.util.Date;

import com.example.evenementservice.dao.EvenementRepository;
import com.example.evenementservice.entities.Evenement;
import com.example.evenementservice.service.IEvenementService;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@AllArgsConstructor
@EnableDiscoveryClient
@ComponentScan(basePackages = "com.example.evenementservice")
public class EvenementServiceApplication implements CommandLineRunner {

	EvenementRepository evenementRepository;
	IEvenementService evenementService;

	public static void main(String[] args) {
		SpringApplication.run(EvenementServiceApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("evenement is running");

		Evenement ev1 = new Evenement();

		ev1.setTitre("pitch");
		ev1.setDate(LocalDateTime.now());
		ev1.setLieu("sfax");
		evenementService.addEvenement(ev1);

		Evenement ev2 = new Evenement();

		ev2.setTitre("wieAct");
		ev2.setDate(LocalDateTime.now());
		ev2.setLieu("sousse");
		evenementService.addEvenement(ev2);

	}
}
