package com.example.department_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.department_service.entity.Department;

public interface DepRepo extends JpaRepository<Department, Long>{

}
