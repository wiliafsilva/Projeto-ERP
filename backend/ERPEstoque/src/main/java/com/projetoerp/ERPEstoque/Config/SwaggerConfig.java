package com.projetoerp.ERPEstoque.Config;

import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration

public class SwaggerConfig {

    @Bean
    public GroupedOpenApi api() {
        return GroupedOpenApi.builder()
                .group("ERPEstoque Back-End")
                .group("Versão 0.1.1")
                .packagesToScan("com.projetoerp.ERPEstoque")
                .build();
    }
}
